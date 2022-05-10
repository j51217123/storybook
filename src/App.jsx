import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: '#1976d2',
        secondary: '#dc004e',
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App"></div>
        </ThemeProvider>
    );
};

export default App;
