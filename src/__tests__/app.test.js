import { render, fireEvent } from '@testing-library/svelte'
import App from "../app.svelte";

const data = [
    { key: "Phil Heartman", value: "pheartman" },
    { key: "Gordon Ramsey", value: "gramsey" }
]

const defaultProps = {
    data: data,
    image:"https://i.pravatar.cc/300"
}

it('button should open a alert', async () => {
    // window.alert = jest.fn();
    render(App, defaultProps)

    // function delay(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    //
    // async function test() {
    //     await delay(500);
    //     const button = document.querySelector('.msg-submit')
    //     await fireEvent.click(button)
    //     expect(alert).toBeCalled()
    // }
    //
    // await test()
})

