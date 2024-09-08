import { useState } from "react";
import { LangChainProps, OptionalString } from "./types";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import { LangchainContainer, FormGroup, ButtonContainer } from "./styles";
import TextArea from "../../common/TextArea";
import LangChainChatBot from "../../models/langChainChatBot";

const LangChain = () => {
  const [question, setQuestion] = useState<OptionalString>(undefined);
  const [result, setResult] = useState<OptionalString>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(undefined);

    try {
      if (!question) {
        throw new Error("Question is required");
      }

      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error("OpenAI API key is not set");
      }

      const langChainChatBot = new LangChainChatBot(apiKey);

      await langChainChatBot.streamMessage(question, (chunk: string) => {
        setResult((prevResult) => (prevResult || "") + chunk);
      });
    } catch (e: any) {
      setResult(`Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LangchainContainer>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            {/* <Block title={title} content={content} /> */}
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  placeholder="Enter your question"
                  value={question}
                  name="question"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </Col>
              <ButtonContainer>
                <Button name="submit" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </ButtonContainer>
            </FormGroup>
            <TextArea
              name="Answer"
              placeholder="The answer will appear here"
              value={result || ""}
              onChange={() => {}}
              readOnly={true}
            ></TextArea>
          </Slide>
        </Col>
      </Row>
    </LangchainContainer>
  );
};

export default withTranslation()(LangChain);
