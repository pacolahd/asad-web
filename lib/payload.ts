import { getPayload as getPayloadClient } from 'payload';
import config from '@payload-config';

// Cache the payload instance
let cachedPayload: Awaited<ReturnType<typeof getPayloadClient>> | null = null;

// Timeout wrapper for promises
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms);
  });
  return Promise.race([promise, timeout]);
}

export const getPayload = async () => {
  // Return cached instance if available
  if (cachedPayload) {
    return cachedPayload;
  }

  // Add a 20-second timeout to handle Neon's cold start (can take 5-10 seconds)
  cachedPayload = await withTimeout(getPayloadClient({ config }), 20000);
  return cachedPayload;
};

// Reset connection state (useful for development)
export const resetPayloadConnection = () => {
  cachedPayload = null;
};
