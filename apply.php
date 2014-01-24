<?php 
$activeClass = "apply";
include('inc/header.php'); 
?>

    <div class="apply">
        <div class="color">
            <div class="apply">
                <div class="container">
                    <div class="page-header main-content">
                        <h1>You wanna make them, too?!</h1>

                        <h3>We're currently looking for:</h3>

<!--
                        <div class="col-lg-3"></div>

                        <div class="col-lg-6">
                            <div class="bottom">
                                <p class="bottom">If you want to be a part of our totally <em>awesome</em> team, please fill out this preliminary questionaire, and write-up prompt, so we can better gauge where we can fit you in (:</p>
                            </div>

                            <div class="col-lg-2"></div>
                        </div>
                    </div>
                    
-->					<div id="jobOfferings">
					<div class="col-lg-4">
					<div class="jobPic">
						<img class="responsive jobs" src="img/developper.png" />
						<h2><span>A Movie in the Park:<br />Kung Fu Panda</span></h2>
					</div>
					</div>
					<div class="col-lg-4">
					<div class="jobPic">
						<img class="responsive jobs" src="img/designer.png">
					</div>
					</div>
					<div class="col-lg-4">
					<div class="jobPic">
						<img class="responsive jobs" src="img/designer.png">
					</div>
					</div>
					</div>	
					
					<div class="col-lg-12"></div>
			
										
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
        
        <div class="col-lg-3"></div>
        <div class="col-lg-6">

	        <h2>Apply!</h2>
            <form id="form" action="contact.php" method="post" id="contact">
            <fieldset>
             
            <label for="name">Name:</label> <br />
            <input type="text" id="name" name="name"><br />
            <label for="email">Email:</label> <br />
            <input type="text" id="email" name="email"><br />
            <label for="position">Position:</label> <br />
            <input type="text" id="position" name="position"><br />
            <label for="essay">Cool interview question?</label><br />
            <textarea name="essay" rows="10" cols="80" id="essay"></textarea> <br /> <br />
            <button onClick = type="submit">Submit</button>
            </fieldset>
            </form>
        </div>
        <div class="col-lg-3"></div>  

        </div>
        </div>
    </div><?php 
    include('inc/footer.php'); 
    ?>
</body>
</html>
