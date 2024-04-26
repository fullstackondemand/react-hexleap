
/**
 * @typedef Theme
 */

export default interface Theme {
    theme: string;
    themeToogle: () => void;
    setTheme: (value: string) => void;
}
