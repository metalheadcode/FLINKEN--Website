import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
    };
    render() {
        return <ThemeContext.Provider value={this.state}></ThemeContext.Provider>;
    }
}

export default ThemeContextProvider;
