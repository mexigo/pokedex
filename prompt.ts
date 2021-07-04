export default async (message: string) => {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message + ": "));
  const n = <number>await Deno.stdin.read(buf);
  if (!n) throw new Error("No input provided");
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
};
