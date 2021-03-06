<script >
	$('.modal-trigger').leanModal({
		opacity: .8,
	});

</script>

<div style="padding: 10px 20px 0px;">
	
	<div style="margin-top: 20px;">
		<div class="card">
			<div class="card-content grey lighten-5">
				<p style="font-size: 30px" ng-show="isSuccess">Great Job! </p style="">
				<p style="font-size: 30px;" ng-hide="isSuccess"> You failed to solved the problem, but nice try! </p>
			</div>
		</div>
		<div class="right">
			<button ng-show="isMultiplayer" ui-sref="multiplayerPage" class="btn btn-success">Find Another Match<span class="glyphicon glyphicon-forward"></span></button>
		</div>
	</div>
	<div class="row">
		<div class="col s6">
			<div class="card grey lighten-5">
            	<div class="card-content">
					<center><canvas id="myChart" width="500px" height="400px"></canvas></center>
				</div>
			</div>
		</div>
		<div class="col s6">
			<div class="card grey lighten-5">
				<div class="card-content">
					<div ng-show="isMultiplayer">
						<div style="color: #0d47a1;" ng-show="isWinner">
							<h4>You Won!</h4>
						</div>
						<div style="color: #f44336" ng-hide="isWinner">
							<h4>You Lose!</h4>
						</div>
					</div>
					<div ng-hide="isMultiplayer">
						<h3 style="color: #2962ff;" ng-show="isSuccess">Level Up!</h3>
						<table class="level_table" ng-show="ranksLoaded">
							<thead>
								<tr>
									<td>Subject Area</td>
									<td>Level</td>
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat=" r in ranks">
									<td><% r.SubjectArea %></td>
									<td>Level <% r.Rank %></td>
									<td>
										<span class="action" ng-show="<% r.Action == 'up'%>">Level up</span>
									</td>	
								</tr>
							</tbody>
						</table>
						<center  ng-hide="ranksLoaded">
							<div class="preloader-wrapper active">
							    <div class="spinner-layer spinner-red-only">
							      	<div class="circle-clipper left">
							        	<div class="circle"></div>
							      	</div>
							      	<div class="gap-patch">
								        <div class="circle"></div>
							      	</div>
							      	<div class="circle-clipper right">
								        <div class="circle"></div>
							      	</div>
							    </div>
						  	</div>
						</center>
					</div>
				</div>
				<div class="card-action">
					<div class="row">
						<div class="col s12">
	  						<a href="#tipsModal" class="modal-trigger waves-effect waves-light btn-large">Tips
	  						<i class="material-icons right">info</i></a>
							<a ng-hide="isMultiplayer" ui-sref="problemPage" class="right waves-effect waves-light btn-large">Next Problem <i class="material-icons right">fast_forward</i></a>
							<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	

  <!-- Modal Structure -->
  	
  	<div id="modal1" class="card modal transparent " style="box-shadow: 0px 0px 0px; height: auto;">
	    <center class="white-tex" style="color: #fafafa;">
			<img src="../img/badges/singleplayermodecomplete.gif" >
			<h3>Started from the bottom</h3>
			<h5>Successfully solved all probl<br>
			emalskdfjasdlfjsa;ld.fjasld.fjasld<br>asdfasdfasd;fsakdjf
			a.fjaslzd.fjadszlf.jadslzfj</h5>
			<a class="modal-action modal-close waves-effect waves-green btn-flat teal lighten-5">ok Thanks!</a>
	    </center>
  	</div>
          

	<!-- Modal Trigger -->
  	<div id="tipsModal" class="modal modal-fixed-footer blue lighten-5">
	    <div class="modal-content">
	      	<h4>Tips: </h4>
	      	<p ng-bind="feedback" style="font-size: 20px;"></p>
		</div>
	    <div class="modal-footer">
	      	<a class="modal-action modal-close waves-effect waves-green btn-flat ">Ok thanks!</a>
	    </div>
  	</div>
</div>