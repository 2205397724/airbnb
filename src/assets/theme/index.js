const theme = {
    color:{
        primaryColor:"#ff385c",
        secondColor:"#00848a",
    },
    text:{
        primaryColor:"#484848",
        secondColor:"#222",
    },
    mixin:{
        boxShadow: `
            transition: box-shadow 0.2s ease;
            &:hover {
                box-shadow:  0 2px 4px rgba(0,0,0,0.18);
            }
        `,
    },
}
export default theme