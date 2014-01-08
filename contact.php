<?php 
$activeClass = "contact";
include('inc/header.php'); 
?>

    <div class="apply">
        <div class="color">
            <div class="contact">
                <div class="container">
                    <div class="page-header main-content">
                        <h1>Interested?!</h1>

                        <h3>Want an app? Want more info?</h3>

                        <div class="col-lg-3"></div>

                        <div class="col-lg-6">
                            <div class="bottom">
                                <p class="bottom">If you want to be a part of our totally <em>awesome</em> team, please fill out this preliminary questionaire, and write-up prompt, so we can better gauge where we can fit you in (:</p>
                            </div>

                            <div class="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="applyCont">
                <div class="col-lg-3"></div>

                <div class="col-lg-6">
                    <h2>Shoot us an email!</h2>

                    <div class="control-group"></div>

                    <div class="control-group">
                        <label for="jvfirstname">First Name: <span class="required">*</span></label>

                        <div class="controls">
                            <input name="jvfirstname" id="jvfirstname" type="text" value="" class="jvtext" autofocus="">
                        </div>
                    </div>

                    <div class="control-group">
                        <label for="jvemail">Email: <span class="required">*</span></label>

                        <div class="controls">
                            <input name="jvemail" id="jvemail" type="text" value="" class="jvtext">
                        </div>
                    </div>


                    <div class="control-group jvcoverletter">
                        <label for="jvcoverletter">Message:</label>

                        <div class="controls">
                            <div class="coverletter">

                                <div style="display:none;" name="RemoveCL" id="RemoveCL">
                                    <b>Cover Letter Uploaded <a href="#" onclick="removeDoc('jvcoverletter'); return false;">[remove]</a></b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="control-group">
                        <div class="controls">
                            <textarea name="jvcoverletter" id="jvcoverletter" class="textarea jvtextwidth" rows="10" cols="100">
</textarea>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3"></div>
            </div>
        </div>
        </div>
    </div>


<?php 
include('inc/footer.php'); 
?>