$("#newBurger").keydown(async (e) => {
	// When the user hit enter
	if (e.keyCode === 13) {
		const $currentTarget = $(e.currentTarget);
		const currentValue = $currentTarget.val();

		await $.ajax({
			method: 'POST',
			url: `/api/burger/new`,
			data: {
				name: currentValue,
			}
		});

		location.reload();
	}
});

$(".devour").click(async (e) => {
	const $currentTarget = $(e.currentTarget);

	const id = $currentTarget.data('id');

	await $.ajax({
		method: 'PUT',
		url: `/api/burger/${id}/devour`
	});

	location.reload();
});
