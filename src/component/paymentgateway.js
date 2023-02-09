export const handlePayment =(email, amount) =>{
    const handler = PaystackPop.setup({
        key: 'pk_test_691843ae251562fce2b01dc4f3c41c8543b20168',
        email,
        amount: amount * 100,
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
          alert('Window closed.');
        },
        callback: function(response){
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });
      handler.openIframe();

}