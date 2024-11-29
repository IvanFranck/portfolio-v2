export default function() {
    const showMenu = useState('showMenu', () => false);
    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    }

    return {
        showMenu,
        toggleMenu
    }
}