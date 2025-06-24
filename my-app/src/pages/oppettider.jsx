import React from "react";

const Oppettider = () => {
	return (
		<div>
			

			<h1 className="oppettider">Öppettider</h1>

			<table className="table">
				<thead>
					<tr>
						<th>Veckodag</th>
						<th>Tid</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Måndag</td>
						<td>11:00 - 21:00</td>
					</tr>
					<tr>
						<td>Tisdag</td>
						<td>11:00 - 21:00</td>
					</tr>
					<tr>
						<td>Onsdag</td>
						<td>11:00 - 21:00</td>
					</tr>
					<tr>
						<td>Torsdag</td>
						<td>11:00 - 21:00</td>
					</tr>
					<tr>
						<td>Fredag</td>
						<td>11:00 - 22:00</td>
					</tr>
					<tr>
						<td>Lördag</td>
						<td>12:00 - 22:00</td>
					</tr>
					<tr>
						<td>Söndag</td>
						<td>15:00 - 21:00</td>
					</tr>
				</tbody>
			</table>

			
		</div>
	);
};

export default Oppettider;