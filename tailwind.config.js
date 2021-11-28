module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Intro_Background: "#f8f9fa",
        background: "#EDEDED",
        Nav_icon: "#51585C",
        Nav_icon_background: "#e4e4e4",
        Search_conatainer: "#f6f6f6",
        border: "#d9d9d9",
        chat_sender_green: "#dcf8c6",
        Chat_hover: "#f5f5f5",
        danger: "#d70000",
        Sent: "#00000052",
        Delivered: "#00000052",
        Seen: "#4fc3f7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
