import plugin from "tailwindcss/plugin";

const paragraph = plugin(function ({ addBase, theme }) {
    addBase({
        p: {
            fontSize: theme("fontSize.sm"),
            color: theme("colors.gray-60"),
        },
        "@media (min-width: 1024px)": {
            p: {
                fontSize: theme("fontSize.base"), // équivalent à lg:text-base
            },
        },
        "@media (min-width: 1280px)": {
            p: {
                fontSize: theme("fontSize.lg"), // équivalent à xl:text-lg
            },
        },
    });
});

export { paragraph };
