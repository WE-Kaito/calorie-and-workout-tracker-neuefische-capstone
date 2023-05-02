import {
  Wrapper,
  List,
  ListItem,
  ListAddButton,
  AddDishForm,
  Input,
  Label,
  SubmitButton,
  CloseFormButton,
  ButtonWrapper,
} from "../../components/DishesPage/styles.js";
import { LoadingDisplay } from "../../components/IndexPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";
import BackButton from "../../components/BackButton/index.js";
import HeadingBackground from "../../components/WorkoutsPage/HeadingBackground.js";
import { StyledPageHeadline } from "../../components/WorkoutsPage/styles.js";

export default function DishesPage() {
  const { dishes, addDish } = useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const calories = parseInt(data.calories);
    const mass = parseInt(data.mass);
    const proteins = parseInt(data.proteins);
    const carbs = parseInt(data.carbs);
    addDish(
      data.meal,
      calories,
      mass ? mass : undefined,
      proteins ? proteins : undefined,
      carbs ? carbs : undefined,
      data.notes ? data.notes : undefined
    );
    toggleFormVisibility(false);
    event.target.reset();
  }

  // hydration error handling
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <LoadingDisplay>█████████████████████████████▒▒▒▒▒</LoadingDisplay>;
  }
  // --------------------------------

  return (
    <Wrapper>
      <HeadingBackground />
      <StyledPageHeadline>Dishes</StyledPageHeadline>
      <Link href="/">
        <BackButton />
      </Link>
      {!formVisibility && (
        <List>
          {dishes.map((dish, index) => (
            <ListItem
              href={`/dishes/${index}`}
              key={index}
              style={{
                justifyContent: "space-between",
                padding: "0px 30px 0px 30px",
              }}
            >
              <span>{dish.meal}</span>
              <span>{`${dish.calories}kcal`}</span>
            </ListItem>
          ))}
          <ListAddButton
            onClick={() => {
              toggleFormVisibility(!formVisibility);
            }}
          >
            ADD MEAL
          </ListAddButton>
        </List>
      )}
      {formVisibility && (
        <AddDishForm
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Label htmlFor="meal">Your Meal:</Label>
          <Input
            id="meal"
            name="meal"
            type="text"
            required
            maxLength={20}
          ></Input>

          <Label htmlFor="calories">{`Calories (kcal):`}</Label>
          <Input
            id="calories"
            name="calories"
            type="number"
            required
            min={0}
            max={7000}
          ></Input>

          <Label htmlFor="mass">{`Mass (g):`}</Label>
          <Input id="mass" name="mass" type="number" min={0} max={7000}></Input>

          <Label htmlFor="proteins">{`Proteins (g):`}</Label>
          <Input
            if="proteins"
            name="proteins"
            type="number"
            min={0}
            max={7000}
          ></Input>

          <Label htmlFor="carbs">{`Carbs (g):`}</Label>
          <Input
            id="carbs"
            name="carbs"
            type="number"
            min={0}
            max={7000}
          ></Input>

          <Label htmlFor="notes" maxLength={140}>
            Notes:
          </Label>
          <Input
            id="notes"
            name="notes"
            type="text"
            style={{ textAlign: "center" }}
          ></Input>
          <ButtonWrapper>
            <CloseFormButton
              type="button"
              onClick={() => {
                toggleFormVisibility(false);
              }}
            >
              CLOSE
            </CloseFormButton>
            <SubmitButton>ADD MEAL</SubmitButton>
          </ButtonWrapper>
        </AddDishForm>
      )}
    </Wrapper>
  );
}
