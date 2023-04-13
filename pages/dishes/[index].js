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
} from "../../components/DishesPage/styles.js";
import useCalorieStore from "../../utils/useCalorieStore.js";
import Link from "next/link.js";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DishDetails() {
  const { dishes, deleteDish } = useCalorieStore();

  const [formVisibility, toggleFormVisibility] = useState(false);

  const router = useRouter();
  const { index = 0 } = router.query;

  return (
    <Wrapper>
      <DeleteButton
        onClick={() => {
          router.push("/dishes");
          deleteDish(dishes[index]);
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
            {` (${dishes[index].calories}g)`}
          </Detail>
          <Detail>{`Calories: ${dishes[index].calories}kcal`}</Detail>
          <Detail>{`Proteins: ${dishes[index].proteins}g`}</Detail>
          <Detail>{`Carbs: ${dishes[index].carbs}g`}</Detail>
          <Detail>{`Notes: ${dishes[index].notes}`}</Detail>
        </DetailsList>
        <DetailsBackButton href="/dishes">CLOSE</DetailsBackButton>
      </List>
    </Wrapper>
  );
}
