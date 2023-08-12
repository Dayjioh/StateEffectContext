const calcAge = (date) =>parseInt((new Date() - new Date(date)) / 1000 / 60 / 60 / 24 / 365);

export { calcAge };
