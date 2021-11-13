import { Button, CircularProgress } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    block: {
      display: 'block',
      width: '100%',
    },
  })
);

const Btn = ({ color, size, loading, children, style, className }) => {
  const classes = useStyles();

  return (
    <Button
      color={color}
      size={size}
      disabled={loading}
      style={{ width: '100%', display: 'block' }}
      className={classes.block}
    >
      {children}
      {loading && <CircularProgress size={20} />}
    </Button>
  );
};

export default Btn;
