import { exec } from 'child_process';
import { readFile } from 'fs';
import { promisify } from 'util';
import { tmpdir } from 'os';
import { FileFormat } from '../enums/FileFormat';

const execAsync = promisify(exec);
const readFileAsync = promisify(readFile);

const youtubeDlPath = '/usr/local/bin/youtube-dl';

export default async (
  format: FileFormat,
  url: string,
): Promise<{ title: string; file: Buffer }> => {
  const args =
    format === FileFormat.AUDIO
      ? '-x --audio-quality 0 --audio-format flac'
      : '';
  const fileExtension = format === FileFormat.AUDIO ? '.flac' : '.%(ext)s';

  const { stderr, stdout } = await execAsync(
    `${youtubeDlPath} ${args} --print-json --no-warnings -o "${tmpdir()}/%(id)s${fileExtension}" "${url}"`,
  );
  const output = JSON.parse(stdout);

  if (stderr) {
    throw new Error(stderr);
  }

  const file = await readFileAsync(output._filename);

  return { title: output.title, file };
};
