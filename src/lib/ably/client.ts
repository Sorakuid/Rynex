import ModelsClient from "@ably-labs/models";
import { Rest } from "ably";

import { env } from "@/env";

let tokenRest: Rest | null = null;

function getRest(): Rest {
  if (!tokenRest) {
    tokenRest = new Rest({ key: env.ABLY_API_KEY });
  }
  return tokenRest;
}

export async function createAblyTokenRequest(
  clientId?: string,
): Promise<Record<string, unknown>> {
  const rest = getRest();
  const tokenRequest = await rest.auth.createTokenRequest({
    clientId: clientId ?? "anonymous",
    capability: { "comments:*": ["subscribe", "publish", "history"] },
    ttl: 3600000,
  });
  return tokenRequest as unknown as Record<string, unknown>;
}

export function createModelsClient(
  ably: ConstructorParameters<typeof ModelsClient>[0]["ably"],
): ModelsClient {
  return new ModelsClient({ ably });
}
