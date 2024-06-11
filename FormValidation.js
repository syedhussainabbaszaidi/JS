                                <form action="" class="custom-form" id="customForm">

                                    <div class="input">
                                        <img src="./assets/images/account-icon.svg" />
                                        <input type="text" class="form-control" placeholder="Your Name" name="name">
                                        <span class="error-txt"></span>
                                    </div>

                                    <div class="input">
                                        <img src="./assets/images/email-icon.svg" />
                                        <input type="email" class="form-control" placeholder="Email Address" name="email">
                                        <span class="error-txt"></span>
                                    </div>

                                    <div class="input">
                                        <input type="tel" id="phone" class="form-control" name="phone1" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
                                        <span class="error-txt"></span>
                                    </div>

                                    <div class="input">
                                        <textarea class="form-control" rows="3" placeholder="Tell us about" name="message"></textarea>
                                        <span class="error-txt"></span>
                                    </div>

                                    <input type="submit" class="form-btn" />
                            </form>

<script>
$("#customForm").on("submit", function(e){

        if(!checkTextField($("#customForm [name='name']").val())) {
            $("#customForm [name='name']").parent().addClass("error");
            $("#customForm [name='name']").parent().find(".error-txt").html("Invalid Name");
            e.preventDefault();
        }

        if(!checkEmailField($("#customForm [name='email']").val())) {
            $("#customForm [name='email']").parent().addClass("error");
            $("#customForm [name='email']").parent().find(".error-txt").html("Invalid Email");
            e.preventDefault();
        }

        if(!iti.isValidNumber()) {
            $("#customForm [name='phone1']").parent().parent().addClass("error");
            $("#customForm [name='phone1']").parent().parent().find(".error-txt").html("Invalid Number");
            e.preventDefault();
        }

        if(!checkTextField($("#customForm [name='message']").val())) {
            $("#customForm [name='message']").parent().addClass("error");
            $("#customForm [name='message']").parent().find(".error-txt").html("Invalid Message");
            e.preventDefault();
        }
        
    });

    $("#customForm input").on("input", function(){
        $(this).parent().parent().removeClass("error");
        $(this).parent().find(".error-txt").html("");
    });

    $("#customForm textarea").on("input", function(){
        $(this).parent().parent().removeClass("error");
        $(this).parent().find(".error-txt").html("");
    });

    function checkTextField(val) {
        let isValid = true;
        if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(val)) {
            isValid = false;
        }
        return isValid;
    }

    function checkEmailField(val) {
        let isValid = true;
        if (
            !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val)
        ) {
            isValid = false;
        }
        return isValid;
    }

</script>
