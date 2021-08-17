import { SelectProps } from "./Select.props";
import { useState, useRef, useEffect } from "react";
import "./Select.css";
import cn from "classnames";
import { useDispatch } from "react-redux";

export const Select = ({
  fetchData,
  label = "name",
  id = "id",
  prompt = "Search...",
  storeValue,
  className,
  ...props
}: SelectProps): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<{} | null>(null);
  const [query, setQuery] = useState<string>("");
  const [options, setOptions] = useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const getOptions = async () => {
    const res = await fetchData();
    setOptions(res);
  };

  const toggle = () => {
    setOpened((prev) => !prev);
    getOptions();
  };

  const filter = (options: {}[]) => {
    return options.filter(
      (option: {}) =>
        option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const displayValue = (): string => {
    if (query.length > 0) return query;
    if (currentValue) return currentValue[label];
    return "";
  };

  const selectOption = (option: {}) => {
    setQuery("");
    setCurrentValue(option);
    dispatch(
      storeValue({
        payload: option,
      })
    );
    setOpened(false);
  };

  return (
    <div className={cn("dropdown", className)} ref={ref}>
      <div className="dropdown__control">
        <div className="dropdown__control__selected_value">
          <input
            type="text"
            placeholder={currentValue ? currentValue[label] : prompt}
            value={displayValue()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOptions(null);
              getOptions();
              setCurrentValue(null);
              setQuery(e.target.value);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") toggle();
            }}
          />
        </div>
        <div className={`dropdown__control__arrow ${opened ? "open" : ""}`} />
      </div>
      <div className={`dropdown__options ${opened ? "open" : ""}`}>
        {options && options.length > 0 ? (
          filter(options).length > 0 ? (
            filter(options).map((option) => (
              <div
                className={`dropdown__options_option ${
                  currentValue === option ? "selected" : ""
                }`}
                onClick={() => selectOption(option)}
                onTouchEnd={() => selectOption(option)}
                key={option[id]}
              >
                {option[label]}
              </div>
            ))
          ) : (
            <div className="dropdown__options_option">Not found...</div>
          )
        ) : (
          <div className="dropdown__options_option">Loading...</div>
        )}
      </div>
    </div>
  );
};
