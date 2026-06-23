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

CREATE TRIGGER IF NOT EXISTS public_outbox_trigger
AFTER INSERT ON public.outbox
FOR EACH STATEMENT EXECUTE PROCEDURE public.outbox_notify();
