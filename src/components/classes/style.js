import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',

    },
    title: {
        marginTop: "-3%",
    },
    form: {
        float: "right",
        [theme.breakpoints.down('sm')]: {
            float: "left",
            width: "85%",

        },

    },
    iconfilter: {
        float: "right",
        fontSize: "30px",
        marginTop: "2%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px",
            marginTop: "7%",
            float: "right",
        },
    },
    container: {
        marginTop: "7%",

    },
    grid: {
        padding: "10px",


    },
    leftContainer: {
        float: "left",


    },
    rightContainer: {
        float: "right",
        [theme.breakpoints.down('sm')]: {
            marginTop: "-62%"
        },
    },
    text: {
        fontWeight: "600",
        fontFamily: "Arial, Helvetica, sans-serif",
        textTransform: 'capitalize',
        textOverflow: 'ellipsis',
        overflow: "hidden",
        whiteSpace: "nowrap"

    },

    rightText: {
        fontFamily: "Arial, Helvetica, sans-serif",
        textTransform: 'capitalize',
        fontStyle: "oblique"
    },
    card: {
        borderRadius: "5%",
        // "&:hover":{
        //     boxShadow: "5px 10px #888888"
        // }

    },
    addbtn: {
        justifyContent: 'center',
        width: "15%",
        height: "50px",
        marginTop: "1%",
        fontWeight: "600",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    }

}));

export default useStyles;
