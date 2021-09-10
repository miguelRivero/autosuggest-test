import { render } from '@testing-library/svelte'
import Avatar from "../components/avatar.svelte";

const defaultProps = {
    image:"https://i.pravatar.cc/300"
}


it('should have background image', () => {
    render(Avatar, defaultProps)
    setTimeout(function(){
        const avatar = document.querySelector('.avatar__bg');
        expect(avatar).toBe(`background-image: ${defaultProps.image}`);
    }, 100);
})
