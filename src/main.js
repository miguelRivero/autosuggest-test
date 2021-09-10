import App from './App.svelte';

const mentions = [
    {
        key: "abdominal", value: "abdominal"
    },
    {
        key: "bone", value: "bone"
    },
    {
        key: "brain", value: "brain"
    },
    {
        key: "cancer", value: "cancer"
    },
    {
        key: "contrast", value: "contrast"
    },
    {
        key: "CT", value: "CT"
    },
    {
        key: "cuff", value: "cuff"
    },
    {
        key: "detached", value: "detached"
    },
    {
        key: "dilatation", value: "dilatation"
    },
    {
        key: "female", value: "female"
    },
    {
        key: "fragment", value: "fragment"
    },
    {
        key: "head", value: "head"
    },
    {
        key: "hip", value: "hip"
    },
    {
        key: "injury", value: "injury"
    },
    {
        key: "kidney", value: "kidney"
    },
    {
        key: "knee", value: "knee"
    },
    {
        key: "left", value: "left"
    },
    {
        key: "liver", value: "liver"
    },
    {
        key: "male", value: "male"
    },
    {
        key: "MRI", value: "MRI"
    },
    {
        key: "pain", value: "pain"
    },
    {
        key: "pancreas", value: "pancreas"
    },
    {
        key: "right", value: "right"
    },
    {
        key: "rotator", value: "rotator"
    },
    {
        key: "severe_pain", value: "severe_pain"
    },
    {
        key: "shoulder", value: "shoulder"
    },
    {
        key: "spine", value: "spine"
    },
    {
        key: "torn", value: "torn"
    },
    {
        key: "tumour", value: "tumour"
    },
    {
        key: "XRAY", value: "XRAY"
    }
];

const pic = "https://i.pravatar.cc/300"

const app = new App({
    target: document.body,
    props: {
        data: mentions,
        image: pic
    }
});

export default app;
