// Importerer funktionen til at skabe et tema fra MUI biblioteket
import { createTheme } from '@mui/material';

// Definition af et brugerdefineret tema ved hjælp af createTheme funktionen
const customTheme = createTheme({
  palette: {
    mode: 'dark', // Angiver en mørk farvetema-mode
    primary: {
      main: '#00e676', // Definerer den primære farve, der anvendes i temaet
    },
    secondary: {
      main: '#00FF00', // Definerer den sekundære farve, der anvendes i temaet
    },
    background: {
      default: '#121212', // Standardbaggrundsfarve for hele appen
      paper: '#1e1e1e', // Baggrundsfarve for elementer, der anses for at være papir, fx kort
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Angiver den globale skrifttypefamilie for tekst
    button: {
      textTransform: 'none', // Fjerner automatisk teksttransformation for knapper (fx gør store bogstaver)
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { // Definerer stilarter direkte på roden af Button komponentet
          fontSize: '1.2rem', // Størrelsen på tekst i knappen
          fontWeight: 'bold', // Gør teksten fed
          letterSpacing: '0.05rem', // Afstanden mellem bogstaverne i teksten
          transition: 'transform 0.2s ease-in-out', // Glat transition for transformationseffekter
          '&:hover': { // Særlige stilarter der anvendes, når musen svæver over knappen
            transform: 'scale(1.05)', // Forstør knappen lidt, når der svæves over den
          },
        },
      },
    },
  },
});

// Eksporterer det brugerdefinerede tema, så det kan importeres og bruges i andre dele af appen
export default customTheme;
