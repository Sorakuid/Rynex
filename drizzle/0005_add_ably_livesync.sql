CREATE TABLE IF NOT EXISTS "nodes" (
  "id" text PRIMARY KEY,
  "expiry" timestamp without time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS "outbox" (
  "sequence_id" serial PRIMARY KEY,
  "mutation_id" text NOT NULL,
  "channel" text NOT NULL,
  "name" text NOT NULL,
  "rejected" boolean NOT NULL DEFAULT false,
  "data" jsonb,
  "headers" jsonb,
  "locked_by" text,
  "lock_expiry" timestamp without time zone,
  "processed" boolean NOT NULL DEFAULT false
);

CREATE OR REPLACE FUNCTION public.outbox_notify()
RETURNS trigger AS $$
BEGIN
  PERFORM pg_notify('ably_adbc'::text, ''::text);
  RETURN NULL;
EXCEPTION
  WHEN others THEN
    RAISE WARNING 'unexpected error in %s: %%', SQLERRM;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS public_outbox_trigger ON public.outbox;
CREATE TRIGGER public_outbox_trigger
AFTER INSERT ON public.outbox
FOR EACH STATEMENT EXECUTE PROCEDURE public.outbox_notify();
