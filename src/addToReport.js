export function addToReport(pluginInstance) {
  const { timeline, invocationInstance } = pluginInstance;
  const entries = timeline.getEntries();
  const { report } = invocationInstance.report;
  report.performanceEntries = (report.performanceEntries || []).concat(entries);
}

// for testing purposes
export const invocations = [];
