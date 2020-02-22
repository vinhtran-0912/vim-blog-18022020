import { ThemeContext } from '../../context/ThemeContext';

const ThemedButton = props => {
  let theme = this.context;
  return <button {...props} style={{ backgroundColor: theme.background }} />;
};
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
