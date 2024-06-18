export type Plugin = {
  name: string;
  exec: (currentValue: number, value: number) => number;
}[];

export default class Calculator {
  public initialValue: number;
  private event = new Map<
    string,
    (currentValue: number, value: number) => number
  >();

  constructor({
    initialValue,
    plugins,
  }: {
    initialValue: number;
    plugins: Plugin;
  }) {
    this.initialValue = initialValue;
    this.registerPlugin(plugins);
  }

  registerPlugin(plugins: Plugin) {
    plugins.forEach(({ name, exec }) => {
      this.event.set(name, exec);
    });
  }

  trigger(name: string, newValue: number) {
    const fn = this.event.get(name);
    if (fn) {
      this.initialValue = fn(this.initialValue, newValue);
      return this.initialValue;
    } else {
      return -1;
    }
  }
}
