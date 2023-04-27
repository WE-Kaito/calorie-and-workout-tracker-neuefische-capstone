/* // Positive Test Case
test("handleClickDay should set calorie button visibility to false when history entry exists and date is before current date", () => {
  const date = new Date("2021-08-01");
  const history = [{ date: new Date("2021-07-31").getTime() }];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = false;
  const showWorkout = false;

  handleClickDay(
    date,
    history,
    unixDate,
    setCalorieButton,
    calorieButtonVisibility,
    setShowWorkout,
    setShowHistoryEntry,
    setHistoryEntryData,
    showHistoryEntry,
    isWorkoutToday,
    showWorkout
  );

  expect(setCalorieButton).toHaveBeenCalledWith(false);
});

// Positive Test Case
test("handleClickDay should set history entry data and show history entry when history entry exists and date is before current date", () => {
  const date = new Date("2021-08-01");
  const history = [{ date: new Date("2021-07-31").getTime() }];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = false;
  const showWorkout = false;

  handleClickDay(
    date,
    history,
    unixDate,
    setCalorieButton,
    calorieButtonVisibility,
    setShowWorkout,
    setShowHistoryEntry,
    setHistoryEntryData,
    showHistoryEntry,
    isWorkoutToday,
    showWorkout
  );

  expect(setHistoryEntryData).toHaveBeenCalledWith([
    { date: new Date("2021-07-31").getTime() },
  ]);
  expect(setShowHistoryEntry).toHaveBeenCalledWith(true);
});

// Positive Test Case
test("handleClickDay should show workout and set calorie button visibility to false when workout is today", () => {
  const date = new Date("2021-08-01");
  const history = [];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = true;
  const showWorkout = false;

  handleClickDay(
    date,
    history,
    unixDate,
    setCalorieButton,
    calorieButtonVisibility,
    setShowWorkout,
    setShowHistoryEntry,
    setHistoryEntryData,
    showHistoryEntry,
    isWorkoutToday,
    showWorkout
  );

  expect(setShowWorkout).toHaveBeenCalledWith(true);
  expect(setCalorieButton).toHaveBeenCalledWith(false);
});

// Negative Test Case
test("handleClickDay should not set calorie button visibility to false when history entry exists but date is after current date", () => {
  const date = new Date("2021-08-02");
  const history = [{ date: new Date("2021-08-01").getTime() }];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = false;
  const showWorkout = false;

  handleClickDay(
    date,
    history,
    unixDate,
    setCalorieButton,
    calorieButtonVisibility,
    setShowWorkout,
    setShowHistoryEntry,
    setHistoryEntryData,
    showHistoryEntry,
    isWorkoutToday,
    showWorkout
  );

  expect(setCalorieButton).not.toHaveBeenCalledWith(false);
});

// Edge Test Case
test("handleClickDay should not set history entry data and show history entry when history entry does not exist", () => {
  const date = new Date("2021-08-01");
  const history = [];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = false;
  const showWorkout = false;

  handleClickDay(
    date,
    history,
    unixDate,
    setCalorieButton,
    calorieButtonVisibility,
    setShowWorkout,
    setShowHistoryEntry,
    setHistoryEntryData,
    showHistoryEntry,
    isWorkoutToday,
    showWorkout
  );

  expect(setHistoryEntryData).not.toHaveBeenCalled();
  expect(setShowHistoryEntry).not.toHaveBeenCalled();
});

// Error Test Case
test("handleClickDay should throw an error when date is not provided", () => {
  const history = [];
  const unixDate = new Date("2021-08-01").getTime();
  const setCalorieButton = jest.fn();
  const calorieButtonVisibility = true;
  const setShowWorkout = jest.fn();
  const setShowHistoryEntry = jest.fn();
  const setHistoryEntryData = jest.fn();
  const showHistoryEntry = false;
  const isWorkoutToday = false;
  const showWorkout = false;

  expect(() =>
    handleClickDay(
      undefined,
      history,
      unixDate,
      setCalorieButton,
      calorieButtonVisibility,
      setShowWorkout,
      setShowHistoryEntry,
      setHistoryEntryData,
      showHistoryEntry,
      isWorkoutToday,
      showWorkout
    )
  ).toThrow();
});
 */
