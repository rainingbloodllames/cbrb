const isDev = process.env.NODE_ENV === "development";

export function devLog(...args: unknown[]): void {
  if (isDev) console.log("[CBRB]", ...args);
}

export function devError(...args: unknown[]): void {
  if (isDev) console.error("[CBRB]", ...args);
  else console.error(...args);
}
