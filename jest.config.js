module.exports = {
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    transform: {
        "^.+\\.svelte$": "svelte-jester",
        "^.+\\.js$": "babel-jest"
    },
    verbose: true,
    moduleFileExtensions: ["js","json", "svelte"],
};
