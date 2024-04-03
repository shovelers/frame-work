import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
    name: 'poster',
    logic: (message: FrameActionDataParsed) => {
        if (message.buttonIndex == 1) {
            return `count`
        }
    },
    content: () => html`
        <frame-image src="/images/rolodex.png" />
        <frame-button action="link" target="https://tally.so/r/mZNdjA">
            Sign up for early access
        </frame-button>
    `
};
