import React from "react";
import { motion } from "framer-motion";
import { createStyles, Container, Text, Group, rem } from "@mantine/core";
import { ConnectKitButton } from "connectkit";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

const pieEmojiAnimation = {
  y: [0, -20, 0], // Bounce up and down by 20 pixels
  transition: {
    repeat: Infinity, // Repeat the animation infinitely
    duration: 1, // Each animation cycle takes 1 second
  },
};

export function BouncingSafeEmoji() {
  return (
    <motion.span
      animate={pieEmojiAnimation}
      style={{ display: "inline-block" }}
    >
      🔒
    </motion.span>
  );
}

export function ShakingMoneyEmoji() {
  const moneyEmojiAnimation = {
    rotate: [-10, 10, -10], // Rotate left and right
    transition: {
      repeat: Infinity, // Repeat the animation infinitely
      duration: 1, // Each animation cycle takes 1 second
    },
  };

  return (
    <motion.span
      animate={moneyEmojiAnimation}
      style={{ display: "inline-block" }}
    >
      🤑
    </motion.span>
  );
}

export function Landing() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <h1 className={classes.title}>
          Interact with {" "}
          <ShakingMoneyEmoji />{" "}
          <Text component="span" variant="gradient" inherit>
            Crypto
          </Text>{" "}
          <br />
          in a <BouncingSafeEmoji /> safe environment.
        </h1>
        <Text className={classes.description} color="dimmed">
          We simplify crypto for everyone, while keeping it safe and secure.
        </Text>
        <Group className={classes.controls}>
          <ConnectKitButton theme="rounded" />
        </Group>
      </Container>
    </div>
  );
}

export default Landing;
