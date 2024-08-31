import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Colors.text.white};
  position: relative;
`

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${Colors.text.white};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: ${Colors.background.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 1000;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${Colors.text.dark};
  cursor: pointer;
  margin-bottom: 20px;
  text-align: right;
  padding: 10px;
`

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuList = styled.ul`
  gap: 4;
  align-items: center;
  margin-left: 10px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 600;
    transition: all 0.5s ease;
    color: ${Colors.text.dark};
    margin-bottom: 10px;
    align-items: center;

    &:hover {
      background-color: ${Colors.background.white};
    }
  }
`

export const WebMenu = styled.div`
  display: flex; 

  @media (max-width: 768px) {
    display: none; 
  }
`
