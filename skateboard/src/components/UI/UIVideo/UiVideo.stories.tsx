import { ComponentMeta, ComponentStory } from '@storybook/react';

import UiVideo from './UiVideo';
import video from './video/video.mp4';

export default {
    title: 'Ui-Kit/UiVideo',
    component: UiVideo,
} as ComponentMeta<typeof UiVideo>;

const Template: ComponentStory<typeof UiVideo>  = (args) => <UiVideo {...args} />;

export const Video = Template.bind({});

Video.args = {
    src: video,
    playbackRate: 1.0,
};