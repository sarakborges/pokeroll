import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import Roll from "../../components/Roll";
import Container from "../../components/Container";
import AppTitle from "../../components/AppTitle";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";

import RollsAPI from "../../apis/rolls";

import "./style.scss";

const Rolls = () => {
  const [rolls, setRolls] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let { page } = useParams();

  if (!page) {
    page = 1;
  }

  const getRolls = useCallback(async () => {
    const rolls = await RollsAPI.getAll(page);

    return rolls.data;
  }, [page]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getRolls();

      setRolls(() => data);
      setIsLoading(false);
    })();
  }, [page, getRolls]);

  return (
    <>
      <AppTitle />

      {isLoading && <Loader />}

      <Container>
        <div id="rolls">
          {!!rolls && (
            <ul className="rolls_list">
              {rolls.results.length > 0 &&
                rolls.results.map((roll, rollKey) => {
                  return <Roll key={rollKey} {...roll} />;
                })}
            </ul>
          )}

          {rolls?.totalPages > 1 && !isLoading && (
            <Pagination
              current={parseInt(page)}
              total={parseInt(rolls.totalPages)}
              isLoading={isLoading}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default Rolls;
