export default function() {
    const showMenu = useState('showMenu', () => false);
    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    }

    const closeMenu = () => {
        showMenu.value = false;
    }

    return {
        showMenu,
        toggleMenu,
        closeMenu
    }
}