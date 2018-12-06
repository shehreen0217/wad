var detail =
    {
        title : "Muhammad Ali",
        balance : 500000,
        currency : "pkr",
        IBAN : "PKN12345654321"
    };
display_title();
function display_title() {
    document.getElementById("title").innerHTML = detail.title;

    document.getElementById("balance").innerHTML = detail.balance;

    document.getElementById("currency").innerHTML = detail.currency;

    document.getElementById("IBAN").innerHTML = detail.IBAN;

}


function deposit_amount(e,v) {

    if(e.key=="Enter")
    {
        if()
        detail.balance = (detail.balance + parseInt(v));
        display_title();

    }


}

function withdraw_amount(e, v) {

    if(e.key=="Enter")
    {
        if(v < detail.balance) {
            detail.balance = (detail.balance - parseInt(v));
            display_title();
        }
        else if(v > detail.balance)
        {
            document.getElementById("withdraw-msg").innerHTML = "Don't have sufficient amount in account";
        }

    }

}