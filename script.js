<!Doctype html>
<html>
	<head>
		<title>Student Registration</title>
		<style type="text/css">
		h3{
			text-align:center
		}
		tr{
		padding:20px 10px !important
		}
		</style>
	</head>
	<body>
		<form style="background: cyan ;width: 300px;padding: 5px 10px;margin: auto;" method="POST" action="1.php">
			<h3>Student Registration Form</h3>
			<table>
				<tr>
					<td>
						<label>Name</label>
					</td>
					<td>
						<input type="text" name="fullname"
						id="fullname">
					</td>
				</tr>
				<tr>
					<td>
						<label>Father Name</label>
					</td>
					<td>
						<input type="text" name="fname" id="fathername">
					</td>
				</tr>
				<tr>
					<td>
						<label>Postal Address</label>
					</td>
					<td>
						<input type="text" name="paddress"
					id="postaladdress">
					</td>
				</tr>
				<tr>
					<td>
						<label>Personal Address</label>
					</td>
					<td>
						<input type="text" name="peraddress"
					id="personaladdress">
					</td>
				</tr>
				<tr>
					<td>
						<label>Sex</label>
					</td>
					<td>
						<input type="radio" name="gender"
						value="Male" id="sex">Male
						<input type="radio" name="gender"
						value="Female"id="sex">Female
					</td>
				</tr>
				<tr>
					<td>
						<label>City</label>
					</td>
					<td>
						<select name="city" id="city">
						<option selected disabled>Select
						City</option>
						<option value="Kota">Kota</option>
						<option
						value="Vellore">Vellore</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>
						<label>Course</label>
					</td>
					<td>
						<select name="course" id="course">
						<option selected disabled>Select
						Course</option>
						<option value="MCA">MCA</option>
						<option value="BCA">BCA</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>
						<label>District</label>
					</td>
					<td>
						<select name="district" id="district">
						<option selected disabled>Select
						District</option>
						<option value="Kota">Kota</option>
						<option
						value="Vellore">Vellore</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>
						<label>Mobile No</label>
					</td>
					<td>
						<input type="text" name="mobnumber"
						id="mobnumber" maxlength="10">
					</td>
				</tr>
				<input type="hidden" name="formsubmit5" value="submit">
				<tr>
					<td>
						<input type="reset" name="resetbtn" value="Reset">
					</td>
					<td>
						<input type="submit" name="submitbtn"value="Submit Form">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>