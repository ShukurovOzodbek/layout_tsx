export const Input = {
    baseStyle: {
        field: {
            fontSize: '12px',
            padding: "10px",
            background: '#444444',
            border: '1px solid black !important',
            width: '48%'
        }
    },
    size: {
        sx: {
            width: '120px !important',
            fontSize: '24px'
        }
    },
    variants: {
        standart: {
            field: {
                fontSize: '12px',
                padding: "10px",
                color: 'green',
                backgroundColor: 'green !important',
                _hover: {
                    backgroundColor: 'black !important'
                }
            }
        },
        outlined: {
            width: '100px',
            fontSize: '12px',
            padding: "10px",
            color: 'white !important',
            border: '2px solid black !important',
            backgroundColor: 'green'
        }
    }
}