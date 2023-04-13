import {
  Wrapper,
  List,
  ListItem,
  ListAddButton,
  AddDishForm,
  Input,
  BackButton,
  Label,
  SubmitButton,
  CloseFormButton,
  ButtonWrapper,
  DetailsList,
  Detail,
  DishHeadline,
  DetailsBackButton,
  DeleteButton,
  DetailsEditButton,
} from "../../components/DishesPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DishDetails() {
  const { dishes, addDish, deleteDish } = useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  const router = useRouter();
  const { index = 0 } = router.query;

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
    deleteDish(dishes[index]);
    toggleFormVisibility(false);
    event.target.reset();
  }

  if (dishes[0])
    return (
      <Wrapper>
        <DeleteButton
          onClick={() => {
            deleteDish(dishes[index]);
            router.push("/dishes");
          }}
        >
          DELETE ENTRY
        </DeleteButton>
        <Link href="/">
          <BackButton>🔙</BackButton>
        </Link>
        <List invisible={formVisibility}>
          <DetailsList>
            <Detail>
              <DishHeadline>{dishes[index].meal}</DishHeadline>
              {` (${dishes[index].calories} g)`}
            </Detail>
            <Detail>{`Calories: ${dishes[index].calories} kcal`}</Detail>
            <Detail>{`Proteins: ${dishes[index].proteins} g`}</Detail>
            <Detail>{`Carbs: ${dishes[index].carbs} g`}</Detail>
            <Detail>{`Notes: ${dishes[index].notes}`}</Detail>
          </DetailsList>

          <DetailsBackButton href="/dishes">←</DetailsBackButton>
          <DetailsEditButton
            onClick={() => {
              toggleFormVisibility(!formVisibility);
            }}
          >
            EDIT
          </DetailsEditButton>
        </List>

        <AddDishForm
          visible={formVisibility}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Label for="meal">Your Meal:</Label>
          <Input
            id="meal"
            name="meal"
            type="text"
            required
            placeholder={`${dishes[index].meal}`}
          ></Input>

          <Label for="calories">{`Calories (kcal):`}</Label>
          <Input
            id="calories"
            name="calories"
            type="number"
            required
            placeholder={`${dishes[index].calories}`}
          ></Input>

          <Label for="mass">{`Mass (g):`}</Label>
          <Input
            id="mass"
            name="mass"
            type="number"
            placeholder={`${dishes[index].mass}`}
          ></Input>

          <Label for="proteins">{`Proteins (g):`}</Label>
          <Input
            if="proteins"
            name="proteins"
            type="number"
            placeholder={`${dishes[index].proteins}`}
          ></Input>

          <Label for="carbs">{`Carbs (g):`}</Label>
          <Input
            id="carbs"
            name="carbs"
            type="number"
            placeholder={`${dishes[index].carbs}`}
          ></Input>

          <Label for="notes">Notes:</Label>
          <Input
            id="notes"
            name="notes"
            type="text"
            placeholder={`${dishes[index].notes}`}
            style={{ textAlign: "center" }}
          ></Input>
          <ButtonWrapper>
            <CloseFormButton
              type="button"
              onClick={() => {
                toggleFormVisibility(false);
              }}
            >
              close
            </CloseFormButton>
            <SubmitButton>save</SubmitButton>
          </ButtonWrapper>
        </AddDishForm>
      </Wrapper>
    );
}
