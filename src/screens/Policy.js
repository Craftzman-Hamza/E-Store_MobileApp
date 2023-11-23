import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const Policy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
          Term & Condition
        </Text>
        <Text style={styles.text}>
          A Terms and Conditions agreement (also called a Terms of Service,
          Terms of Use, or simply Terms) is a legally binding agreement that
          allows you to protect your business and limit your liability. It does
          this by establishing your legal rights and limitations in written
          form. Your Terms and Conditions agreement should lay out the rules you
          want your online shoppers to abide by if they want to browse your
          store or make purchases. Since your Terms and Conditions agreement is
          legally enforceable, both you and your customers can enforce the Terms
          established in the agreement. A customer's agreement with your Terms
          and Conditions is sometimes implied, meaning you assume the customer
          agrees to your Terms by virtue of browsing your site, downloading
          information, purchasing products and otherwise interacting with your
          store. This type of implied consent is called a browsewrap agreement.
          However, as privacy laws evolve to become more strict, browsewrap is
          being phased out and more and more ecommerce stores are requiring
          shoppers to tick a box or click a button to actively acknowledge and
          accept the Terms and Conditions to comply with laws. This type of
          agreement is called a clickwrap agreement, meaning the user must take
          action to confirm their consent to the agreement. It is the preferred
          and recommended method to best protect you and your online store from
          legal liability. As an ecommerce site owner, you can enforce your
          Terms by refusing to allow an online shopper to browse your site or
          purchase products. The customer also can enforce the Terms by filing a
          lawsuit. A Terms and Conditions agreement typically is organized to
          cover several important sections or clauses, depending on the nature
          of the business.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  text: {
    fontSize: 12,
  },
});

export default Policy;
