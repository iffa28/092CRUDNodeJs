function samplePromise() {
    return Promise.resolve("Iffatuz Zahra")
}

const data = await samplePromise();
console.info(data);