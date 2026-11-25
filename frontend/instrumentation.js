
const { NodeSDK } = require("@opentelemetry/sdk-node");

const {
  PeriodicExportingMetricReader
} = require("@opentelemetry/sdk-metrics");

const {
  getNodeAutoInstrumentations
} = require("@opentelemetry/auto-instrumentations-node");

const {
  OTLPTraceExporter
} = require("@opentelemetry/exporter-trace-otlp-http");

const {
  OTLPMetricExporter
} = require("@opentelemetry/exporter-metrics-otlp-http");

const sdk = new NodeSDK({
  serviceName: "otel-frontend",

  traceExporter: new OTLPTraceExporter({
    url: "http://otel-collector:4318/v1/traces"
  }),

  metricReaders: [
    new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url: "http://otel-collector:4318/v1/metrics"
      }),
      exportIntervalMillis: 15000
    })
  ],

  instrumentations: [
    getNodeAutoInstrumentations()
  ]
});

sdk.start();

console.log("Frontend OpenTelemetry initialized");

process.on("SIGTERM", () => {
  sdk.shutdown().finally(() => process.exit(0));
});
