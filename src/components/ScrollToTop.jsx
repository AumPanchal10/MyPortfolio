
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} visible={visible}>
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;
