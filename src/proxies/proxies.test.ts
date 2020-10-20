import { createLogger, Logger } from "./proxies.ts";
import { FakeTime, spy, assertEquals, stub, Stub } from "../dev_deps.ts";

class FakeLogger implements Logger {
  timeEnd(label: string) {}
  log(message: string) {}
  time(label: string) {}
}

function uppercase(param: string) {
  return param.toUpperCase();
}

Deno.test("logs a function", () => {
  const time = new FakeTime("2018-10-10T12:34:56z");
  const logger = new FakeLogger();
  const loggerStub: Stub<Logger> = stub(logger, "log");
  const functionLogger = createLogger(uppercase, logger);

  functionLogger("test");

  assertEquals(loggerStub.calls[0].args, [
    "2018-10-10T12:34:56.000Z [function] uppercase (Args: test) {Result: TEST}",
  ]);
  time.restore();
});

Deno.test("hace un log cuando se accede a una propiedad de un objeto", () => {
  const time = new FakeTime("2018-10-10T12:34:56z");
  const logger = new FakeLogger();
  const loggerStub: Stub<Logger> = stub(logger, "log");

  const objectLogger = createLogger({ a: 1 }, logger);

  objectLogger.a;

  assertEquals(loggerStub.calls[0].args, [
    "2018-10-10T12:34:56.000Z [object] (Prop: a) {Result: 1}",
  ]);
  time.restore();
});

Deno.test("hace un log cuando se accede a un elemento de un array", () => {
  const time = new FakeTime("2018-10-10T12:34:56z");
  const logger = new FakeLogger();
  const loggerStub: Stub<Logger> = stub(logger, "log");

  const arrayLogger = createLogger([1, 2], logger);

  arrayLogger[0];

  assertEquals(loggerStub.calls[0].args, [
    "2018-10-10T12:34:56.000Z [object] (Prop: 0) {Result: 1}",
  ]);
  time.restore();
});
