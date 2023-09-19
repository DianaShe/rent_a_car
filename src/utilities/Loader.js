import { ThreeDots } from 'react-loader-spinner';
import { colors } from './colors';

export default function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={colors.accent}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}